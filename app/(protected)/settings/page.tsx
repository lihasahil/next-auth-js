import { auth } from "@/auth";

const SettingdPage = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default SettingdPage;
