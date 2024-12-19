//Composition

import { Checkout } from "../Checkout";
import { ListVehicles } from "../ListVehicles";

export default function Home() {
  return (
    <div>
      <Checkout list={<ListVehicles />} />
    </div>
  );
}
