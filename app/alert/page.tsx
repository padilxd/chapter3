import { AlertInfo } from "@/components/alert";

export default function Home() {
  return (
    <main className="p-5">
      <AlertInfo title="Alert Info" type="info">
        Ini adalah alert dengan tipe info
      </AlertInfo>

      <AlertInfo title="Alert Success" type="success">
        Ini adalah alert dengan tipe success
      </AlertInfo>

      <AlertInfo title="Alert Warning" type="warning">
        Ini adalah alert dengan tipe warning
      </AlertInfo>

      <AlertInfo title="Alert Danger" type="danger">
        Ini adalah alert dengan tipe danger
      </AlertInfo>
    </main>
  );
}
