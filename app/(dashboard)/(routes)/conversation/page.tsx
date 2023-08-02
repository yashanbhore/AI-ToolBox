import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

const Conversation = () => {
  return (
  <Heading 
  title={"Conversation"} 
  description={"Our advanced conversation model"} 
  icon={MessageSquare} 
  iconColor="text-violet-500"
  bgColor="bg-violet-500/10"/>
);
};

export default Conversation;