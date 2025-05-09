import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useContent } from "../hooks/useContent";
import { useRefreshContent } from "../hooks/useRefreshContent";


export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents } = useContent();
  const refresh = useRefreshContent();


  async function deleteItem(id: string) {
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
      data: { contentId: id },
      headers: { Authorization: localStorage.getItem("token") },
    });
    refresh();
  }

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex justify-end gap-4">
          <Button onClick={() => setModalOpen(true)} variant="primary" text="Add content" startIcon={<PlusIcon />} />
          <Button
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, { share: true }, {
                headers: { Authorization: localStorage.getItem("token") }
              });
              alert(`http://localhost:5173/share/${response.data.hash}`);
            }}
            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ _id, type, link, title }) => (
            <Card key={_id} id={_id} type={type} link={link} title={title} deleteItem={deleteItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
