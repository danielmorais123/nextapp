import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchFilter({ filter, value, setValue }: any) {
  console.log(value);
  return (
    <div>
      <Select value={value} onValueChange={setValue}>
        {" "}
        <SelectTrigger className="">
          <SelectValue placeholder={filter.name} />
        </SelectTrigger>
        <SelectContent>
          {filter.filters.map((f: string, idx: number) => (
            <SelectItem value={f}>{f}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
