import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rcosgzpnsdkkruthhlnn.supabase.co",
  process.env.REACT_APP_SUPABASE_API_KEY
);

export async function addFoodItem(foodItem) {
  const { data, error } = await supabase.from("food_item").insert([foodItem]);
  console.log(error, data);
}

export async function getFoodItems() {
  const { data, error } = await supabase.from("food_item").select("*");
  console.log(data, error);
  return data;
}

export async function deleteData() {
  const { data, error } = await supabase
    .from("food_Item")
    .delete()
    .match({ id: 2 });
  console.log(data, error);
  return data;
}
//TODO:
