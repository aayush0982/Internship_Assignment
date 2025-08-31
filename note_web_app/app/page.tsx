import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      hello world <br />
      <Link href="/signup">
        <button className="p-4 border-2 rounded-2xl cursor-pointer">SignUp</button>
      </Link>
    </div>
  );
}
