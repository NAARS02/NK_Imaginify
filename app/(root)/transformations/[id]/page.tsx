import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


import { Button } from "@/components/ui/button";

import { getImageSize } from "@/lib/utils";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

 

  return (
    <>
      

      <section className="mt-5 flex flex-wrap gap-4">
        <div className="p-14-medium md:p-16-medium flex gap-2">
          <p className="text-dark-600">Transformation:</p>
          <p className=" capitalize text-purple-400">
            
          </p>
        </div>

        
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2 ">
              <p className="text-dark-600">Prompt:</p>
              
            </div>
          </>
     

       
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Color:</p>
              
            </div>
          </>
      

       
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Aspect Ratio:</p>
           
            </div>
          </>
      
      </section>

      <section className="mt-10 border-t border-dark-400/15">
        <div className="transformation-grid">
          {/* MEDIA UPLOADER */}
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600">Original</h3>

            
          </div>

          {/* TRANSFORMED IMAGE */}
          
        </div>

        
          <div className="mt-4 space-y-4">
            <Button asChild type="button" className="submit-button capitalize">
             
                Update Image
              
            </Button>

           
          </div>
      
      </section>
    </>
  );
};

export default ImageDetails;