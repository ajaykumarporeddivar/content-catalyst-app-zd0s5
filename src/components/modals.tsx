'use client';
import { useState } from 'react';
import { Modal, Button } from '@/components/ui';
import { lucideCheck, lucideX } from 'lucide-react';
import { Item } from '@/lib/types';

export const EntityDetailModal = ({ item, open, onClose }: { item: Item; open: boolean; onClose: () => void }) => {
  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);
  const [archive, setArchive] = useState(false);

  const handleApprove = () => {
    setApprove(true);
    setTimeout(() => {
      setApprove(false);
    }, 2000);
  };

  const handleReject = () => {
    setReject(true);
    setTimeout(() => {
      setReject(false);
    }, 2000);
  };

  const handleArchive = () => {
    setArchive(true);
    setTimeout(() => {
      setArchive(false);
    }, 2000);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold">Content Details</h2>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <p id="title">{item.title}</p>
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2" htmlFor="body">
            Body
          </label>
          <p id="body">{item.body}</p>
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2" htmlFor="type">
            Type
          </label>
          <p id="type">{item.type}</p>
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="primary" onClick={handleApprove}>
            Approve
          </Button>
          <Button variant="secondary" onClick={handleReject}>
            Reject
          </Button>
          <Button variant="danger" onClick={handleArchive}>
            Archive
          </Button>
        </div>
        {approve && (
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
            <lucideCheck className="text-green-500 w-6 h-6 mr-2" />
            Content approved successfully!
          </div>
        )}
        {reject && (
          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
            <lucideX className="text-red-500 w-6 h-6 mr-2" />
            Content rejected successfully!
          </div>
        )}
        {archive && (
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-4">
            <lucideCheck className="text-blue-500 w-6 h-6 mr-2" />
            Content archived successfully!
          </div>
        )}
      </div>
    </Modal>
  );
};

export const ConfirmModal = ({ open, onClose, title, message, onConfirm, variant }: { open: boolean; onClose: () => void; title: string; message: string; onConfirm: () => void; variant: 'danger' | 'info' }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{message}</p>
        <div className="flex justify-end mt-4">
          <Button variant={variant} onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};