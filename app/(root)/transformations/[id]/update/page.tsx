import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";


const Page = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  
   

  return (
    <>
    

      <section className="mt-10">
       TransformationPage
      </section>
    </>
  );
};

export default Page;