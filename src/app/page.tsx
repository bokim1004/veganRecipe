import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from "@/components/NavigationBar";
import Main from "@/components/Main";

export default function Home() {
  return (
      <div>
        <NavigationBar/>
        <Main/>
      </div>
  );
}
