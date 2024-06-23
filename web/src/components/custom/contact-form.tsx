import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";

const inputFieldList = [
  {
    name: "Name",
    type: "text",
    placeholder: "Full Name",
  },
  {
    name: "Email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "Mobile No",
    type: "text",
    pattern: "^d{5}(-d{4})?$",
    placeholder: "Mobile No",
  },
];

export const ContactForm = () => {
  const { toast } = useToast();

  return (
    <>
      <form className="w-full grid gap-4">
        {inputFieldList.map((field, idx) => (
          <Input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            pattern={field?.pattern}
          />
        ))}
        <Textarea placeholder="Type your message here." />
        <Button
          className="w-full"
          onClick={() => {
            toast({
              title: "Thank you",
              description: "I will contact u shortly",
            });
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};
