import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import formatPrice from "~/modules/formatPrice";

type TicketCardPropsType = {
  title: string;
  description: string;
  expiredDate: string;
  price: number;
  isSoldOut: boolean;
  endedDate: string;
  onClick?: () => void;
  isActive?: boolean;
};

const renderTag = ({
  date,
  soldOut,
  endedDate,
}: {
  date: string;
  soldOut: boolean;
  endedDate: string;
}) => {
  const isEventEnded = dayjs().isAfter(dayjs(endedDate).format());

  if (isEventEnded) return <p className="font-bold text-red-600">EVENT ENDED</p>;
  if (dayjs(date).isBefore(dayjs().format()))
    return <p className="font-bold text-red-600">SALE ENDED</p>;
  if (soldOut) return <p className="font-bold text-red-600">SOLD OUT</p>;

  return null;
};

const TicketCard = ({
  title,
  description,
  expiredDate,
  endedDate,
  price,
  isSoldOut = false,
  onClick,
  isActive = false,
}: TicketCardPropsType) => (
  <button onClick={onClick} className="block w-full text-left">
    <article
      className={`relative rounded-md border bg-white px-8 py-4 ${isActive ? "border-blue-600" : "border-inherit"}`}
    >
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
        {title}
      </h2>
      <p className="text-sm leading-normal [&:not(:first-child)]:mt-2">{description}</p>
      <div className="mt-3">
        <div className="flex items-center">
          <Icon icon="ic:round-access-time-filled" className="mr-1 text-neutral-600" />
          <p className="mt-1 text-sm leading-normal text-indigo-600">
            Ends on {dayjs(expiredDate).format("MMM D YYYY, HH:mm A")}
          </p>
        </div>
      </div>
      <div className="relative my-4 border-b-2 border-dashed">
        <span className="before:absolute before:-bottom-1 before:left-[-33px] before:top-[-14px] before:z-0 before:h-8 before:w-6 before:rounded-r-full before:border-2 before:border-l-0 before:bg-[#F8FAFC] before:content-['']" />
        <span className="after:absolute after:-bottom-1 after:right-[-33px] after:top-[-14px] after:z-0 after:h-8 after:w-6 after:rounded-l-full after:border-2 after:border-r-0 after:bg-[#F8FAFC] after:content-['']" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold">{formatPrice(price)}</p>
        {renderTag({ date: expiredDate, soldOut: isSoldOut, endedDate })}
      </div>
    </article>
  </button>
);

export default TicketCard;
