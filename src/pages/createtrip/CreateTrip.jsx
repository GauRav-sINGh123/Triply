import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  AI_PROMPT,
  SelectBudgetList,
  SelectTravelList,
} from "@/constants/options";
import toast from "react-hot-toast";
import { chatSession } from "@/service/AiModal";
import { useAuth } from "@/context/AuthContext";
import useCreateTrip from "@/hooks/useCreateTrip";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const { user } = useAuth();
  const navigate = useNavigate();
  const { addTrip, loading, error } = useCreateTrip();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateTrip = async () => {
    if (
      !formData?.days ||
      formData?.days <= 0 ||
      formData?.days >= 30 ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.travelers
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    const Final_Prompt = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{days}", formData?.days)
      .replace("{travelers}", formData?.travelers)
      .replace("{budget}", formData?.budget)
      .replace("{days}", formData?.days);

    const result = await chatSession.sendMessage(Final_Prompt);

    const tripData = result?.response?.text();
    const docId = Date.now().toString();

    const success = await addTrip(formData, tripData, docId);

    if (success) {
      toast.success("Trip created successfully");
      navigate("/viewtrip/" + docId);
    } else {
      toast.error("Failed to create trip");
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="mt-4 text-3xl text-center font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj mb-16">
        Tell Us Your Travel Preferences
      </h2>
      <p className="text-gray-700 my-2 text-center">
        Just Provide Some Basic Details, We'll Help You Find The Best Trip.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-xl font-pj mb-4">
            What is your destination?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API}
            selectProps={{
              place,
              onChange: (place) => {
                setPlace(place);
                handleInputChange("location", place);
              },
            }}
          />
        </div>
        <div>
          <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-xl font-pj mb-4">
            How many days are you planning to travel?
          </h2>
          <Input
            placeholder={"Enter number of days"}
            type="number"
            onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-xl font-pj mb-4">
          What is your budget?
        </h2>
        <div className="grid-cols-1 md:grid sm:grid-cols-3 gap-4">
          {SelectBudgetList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border rounded-lg hover:scale-105 transition-all ease-in-out hover:shadow-lg cursor-pointer ${
                  formData?.budget === item.title &&
                  "shadow-xl border border-blue-800"
                }`}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-gray-500 text-sm font-semibold">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-xl font-pj mb-4">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid-cols-1 md:grid sm:grid-cols-3 gap-4">
          {SelectTravelList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleInputChange("travelers", item.people)}
                className={`p-4 border rounded-lg hover:scale-105 transition-all ease-in-out hover:shadow-lg cursor-pointer ${
                  formData?.travelers === item.people &&
                  "shadow-xl border border-blue-800"
                }`}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-gray-500 text-md font-semibold">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {loading ? (
        <div role="status" className="flex justify-center mt-10">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Button
          onClick={generateTrip}
          className="mt-10 rounded-xl hover:shadow-lg hover:scale-105 transition-all ease-in-out text-md font-bold"
          disabled={!user}
        >
          {!user ? "Please Login To Generate" : "Generate Trip"}
        </Button>
      )}

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

export default CreateTrip;
