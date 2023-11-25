import Head from "next/head";
import Image from "next/image";
import { ProgressBar } from "../components/progress-bar";
import { Container } from "../components/container";
import { ModuleCard } from "../components/module-card";
import { BuddyBucks } from "../components/buddy-bucks";
import { YourCity } from "../components/your-city";
import { BuddyIllustration } from "../components/buddy-illustration";

export default function(){
    return(
        <Container>
            <Head>
            <title>Game page</title>
           <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProgressBar progress={30} />
            <Image width={500} height={500} className="main_sub" src="/main_isometric.jpg" alt="" />
            <div className="flex ">
                <div className="mx-5 first_row"><Image width={70} height={70} src="/bag.jpg" alt="" /></div>
                <div className="mx-5 secoond_row" ><Image width={70} height={70} src="/Version-4.jpg" alt="" /></div>
                <div className="mx-5 first_row"><Image width={70} height={70} src="/Summer-2.jpg" alt="" /></div>
            </div>
            <div class=" flex mt-5">
              <div><Image width={70} height={60} src="/Restaurant-1.jpg" alt="" /></div>
              <div><Image width={60} height={60} src="/Shoe-store-3.jpg" alt="" /></div>
              <div><Image width={63} height={60} src="/Garage-1.jpg" alt="" /></div>
              <div><Image width={69} height={60} src="/Small.jpg" alt="" /></div>
              <div><Image width={57} height={60} src="/Version-2.jpg" alt="" /></div>
            </div>




        </Container>
    );
}