import { getServerSession } from "#auth";
export default eventHandler(async (event) => {
  const secretdata = [
    { id: 1, name: "secret1" },
    { id: 2, name: "secret2" },
  ];
  const session = await getServerSession(event);
  if (!session) {
    return { status: "unauthenticated" };
  }
  return { status: "authenticated", data: secretdata };
});
