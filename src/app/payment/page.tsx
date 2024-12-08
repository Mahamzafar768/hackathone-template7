import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* Ad Section */}
      <section className="w-full flex flex-wrap gap-4 justify-center sm:gap-8">
        <Image src="/Ads 1.png" alt="Ad 1" width={640} height={360} className="max-w-full" />
        <Image src="/Ads 2.png" alt="Ad 2" width={640} height={360} className="max-w-full" />
      </section>

      {/* Pick-Up, Switch, Drop-Off Section */}
      <section className="w-full flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image src="/Pick - Up.png" alt="Pick-Up" width={582} height={132} className="max-w-full" />
        <Image src="/Switch.png" alt="Switch" width={60} height={60} className="max-w-full" />
        <Image src="/Drop - Off.png" alt="Drop-Off" width={582} height={132} className="max-w-full" />
      </section>

      {/* Popular Cars Section */}
      <section className="popular w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Cars</h1>
          <Link href="/categories">
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {`Car Model ${index + 1}`} <Image src="/heart.png" alt="heart" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sport</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src="/car.png" alt="Car" width={220} height={68} />
                <Image src="/Spesification.png" alt="Specification" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p>
                  $99.00/<span className="text-gray-500">day</span>
                </p>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Recommended Cars Section */}
      <section className="w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommended Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <Card
              key={index}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {`Car Model ${index + 5}`} <Image src="/heart.png" alt="heart" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src="/suv.png" alt="SUV" width={220} height={68} />
                <Image src="/Spesification.png" alt="Specification" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p>
                  $99.00/<span className="text-gray-500">day</span>
                </p>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Show More Section */}
      <section className="w-full text-center">
        <Link href="/categories">
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
