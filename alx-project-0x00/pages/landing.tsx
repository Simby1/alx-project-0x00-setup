import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

       <div className="flex flex-col gap-4 mt-8">
        <Button title="Small Button" styles="bg-blue-500 text-white px-3 py-1 text-sm rounded-sm" />
        <Button title="Medium Button" styles="bg-green-500 text-white px-4 py-2 text-base rounded-md" />
        <Button title="Large Button" styles="bg-red-500 text-white px-6 py-3 text-lg rounded-lg" />
        <Button title="Full Button" styles="bg-red-500 text-white px-6 py-3 text-lg rounded-full" />
      </div>
    </div>
  )
}
export default Landing