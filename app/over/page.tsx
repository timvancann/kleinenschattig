import { Title } from "@/components/Title";

export default function Home() {
  return (
    <div className={"container mx-auto mt-[2rem] lg:mt-[10rem]"}>
      <Title title={"Over mij"} />
      <div className={"flex flex-col md:flex-row items-center justify-center gap-4 mx-4"}>
        <img
          src={"https://picsum.photos/300"}
          alt={"placeholder"}
          className={"w-40% object-cover"}
        />
        <div className={"flex flex-col gap-4"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada fames ac turpis egestas maecenas pharetra convallis
            posuere morbi. Metus aliquam eleifend mi in. A arcu cursus vitae
            congue. Sed elementum tempus egestas sed. Curabitur gravida arcu ac
            tortor. Eget sit amet tellus cras adipiscing enim. Gravida arcu ac
            tortor dignissim. Orci a scelerisque purus semper eget duis at
            tellus. Aliquam ut porttitor leo a.
          </p>
          <p>
            In mollis nunc sed id. Turpis massa sed elementum tempus. Nec nam
            aliquam sem et. Amet consectetur adipiscing elit ut aliquam purus
            sit amet luctus. Quis lectus nulla at volutpat diam ut. Bibendum est
            ultricies integer quis auctor elit sed vulputate mi. Amet justo
            donec enim diam vulputate ut. Neque sodales ut etiam sit amet nisl.
            Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit.
            Morbi tristique senectus et netus et malesuada fames ac turpis.
          </p>
        </div>
      </div>
    </div>
  );
}
