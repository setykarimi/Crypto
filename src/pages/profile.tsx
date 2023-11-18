import MyInfoCard from "@pagesComp/profile/cards/my-info";

export default function ProfilePage() {
  return (
    <div className="inner-container mx-auto mt-8 grid lg:grid-cols-4 grid-cols-1 gap-4">
      <div>
        <MyInfoCard />
      </div>
    </div>
  );
}
