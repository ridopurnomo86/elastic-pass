import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HomeSearchValidation } from "~/data/form-validation/HomeSearchValidation";
import EventCardList from "~/components/data-display/EventCardList";
import CreatorCardList from "~/components/data-display/CreatorCardList";
import CategoryCardList from "~/components/data-display/CategoryCardList";
import ORGANIZER_DATA from "~/data/test-data/organizer";
import { Await, useLoaderData } from "@remix-run/react";
import { MainHomeLoader } from "services/main/main-home";
import { Suspense } from "react";
import EventCardListLoading from "~/components/data-display/EventCardList/loading";
import { EVENT_DATA } from "~/data/test-data/data";
import CategoryCardListLoading from "~/components/data-display/CategoryCardList/loading";
import Hero from "./Hero";

const MainHome = () => {
  const { type, events } = useLoaderData<typeof MainHomeLoader>();

  const form = useForm<z.infer<typeof HomeSearchValidation>>({
    resolver: zodResolver(HomeSearchValidation),
    defaultValues: {
      location: "",
    },
  });

  const onSubmit = (values: z.infer<typeof HomeSearchValidation>) => values;

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Hero form={form} onSubmit={onSubmit} />
      <Suspense fallback={<EventCardListLoading className="container mx-auto mt-12" />}>
        <Await resolve={events}>
          {(events) => (
            <EventCardList
              data={events}
              className="container mx-auto mt-12"
              subtitle="Top picks for you. Updated Daily"
              title="Selected Events"
            />
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<CategoryCardListLoading className="container mx-auto mt-12" />}>
        <Await resolve={type}>
          {(type) => (
            <CategoryCardList
              className="container mx-auto mt-12"
              title="Type Events"
              subtitle="Top picks for all type of events."
              data={type}
            />
          )}
        </Await>
      </Suspense>
      <CreatorCardList
        title="Featured Artists & Organizers"
        subtitle="Follow the creator from these events and get notified when they create new ones."
        data={ORGANIZER_DATA}
      />
      <EventCardList
        data={EVENT_DATA}
        className="container mx-auto mt-12 pb-12"
        subtitle="Top picks for your country"
        title="Popular in Medan, Indonesia"
      />
    </main>
  );
};

export default MainHome;
