import CreatorCard from "~/components/cards/CreatorCard";

type CreatorDataType = {
  id: number;
  title: string;
  imgUrl: string;
};

type CreatorCardListPropsType = {
  title: string;
  subtitle: string;
  data: Array<CreatorDataType>;
};

const CreatorCardList = ({ title, subtitle, data }: CreatorCardListPropsType) => (
  <section className="container mx-auto mt-12">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</h3>
    <p className="text-sm text-neutral-600">{subtitle}</p>
    <div className="flex gap-4 overflow-x-scroll py-4">
      {data.map((item) => (
        <div className="max-w-[150px]" key={item.id}>
          <CreatorCard title={item.title} imgUrl={item.imgUrl} />
        </div>
      ))}
    </div>
  </section>
);

export default CreatorCardList;
