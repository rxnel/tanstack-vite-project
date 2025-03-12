import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import supabase from "../utils/supabase";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { data } = useQuery({
    queryKey: ["about"],
    queryFn: getTodos,
  });

  if (data) {
    return <div className="p-2">{data[0]?.title ?? "no posts"}</div>;
  }
}

const getTodos = async () => {
  const { data, error } = await supabase
    .from("Todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }
  return data;
};
