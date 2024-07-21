import Image from "next/image";
const data = [
  {
    name: "classes",
    url: "/class",
  },
  // {
  //   name: "subclasses",
  //   url: "/subclass",
  // },
  // {
  //   name: "races",
  //   url: "/race",
  // },
  // {
  //   name: "subraces",
  //   url: "/subrace",
  // },
  // {
  //   name: "backgrounds",
  //   url: "/background",
  // },
  // {
  //   name: "feats",
  //   url: "/feat",
  // },
  // {
  //   name: "spells",
  //   url: "/spell",
  // },
  // {
  //   name: "items",
  //   url: "/item",
  // },
  // {
  //   name: "pantheon",
  //   url: "/pantheon",
  // },
];

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">Max&apos;s DND</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg"
          >
            <Image
              src={`/${item.name}.png`}
              alt={""}
              width={100}
              height={100}
            />
            <p className="text-lg font-semibold">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
