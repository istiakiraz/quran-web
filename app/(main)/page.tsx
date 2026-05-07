import { ThemeToggle } from "@/components/ui/common/ThemeToggle";


export default function page() {
  return (
    <div>
      <ThemeToggle />
     
<p className="font-sans">English text</p>


<p className="font-amiri" dir="rtl">عربي نص</p>


<p className="font-quran"  dir="rtl">قرآن كريم</p>
    </div>
  );
}
