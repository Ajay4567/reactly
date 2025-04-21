import PetBasicInfo from "./PetBasicInfo";
import HealthSummary from "./HealthSummary";
import FeedingSchedule from "./FeedingSchedule";
import GroomingReminders from "./GroomingReminders";
import PhotoGallery from "./PhotoGallery";
import NotesJournal from "./NotesJournal";
import petData from "../../data/petSampleData";
import "../../assets/styles/PetProfile.css";

export default function PetProfile() {
  return (
    <div className="pet-profile flex flex-col items-center gap-5 p-5 bg-[#f9f9f9]">
      <PetBasicInfo data={petData.basicInfo} />
      <HealthSummary data={petData.health} />
      <FeedingSchedule data={petData.feeding} />
      <GroomingReminders data={petData.grooming} />
      <PhotoGallery images={petData.gallery} />
      <NotesJournal notes={petData.notes} />
    </div>
  );
}
