import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ProjectType } from '../types';
import ReactPlayer from 'react-player';

interface ProjectModalProps {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#1D1D4D] p-8 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 left-0 right-0 flex justify-end z-10 -mt-4 -mr-4 mb-4">
            <button
              onClick={onClose}
              className="p-2 text-[#DCFFDF]/60 hover:text-[#DCFFDF] transition-colors bg-[#1D1D4D] rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
            <ReactPlayer
              url={project.videoUrl}
              width="100%"
              height="100%"
              controls
            />
          </div>

          <h3 className="text-2xl font-bold text-[#DCFFDF] mb-4">{project.title}</h3>
          <p className="text-[#DCFFDF]/80">{project.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}