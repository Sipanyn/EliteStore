import { useQuery } from "@tanstack/react-query";
import getData from "../services/getData";

function useProduct() {
  return useQuery({
    queryKey: ["book"],
    queryFn: getData,
  });
}

export default useProduct;
