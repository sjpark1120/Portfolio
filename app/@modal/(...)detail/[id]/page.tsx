"use client";
import React, { useEffect } from "react";
import ProjectDetail from "../../../../components/detail";

function pagemodal({ params: { id } }: { params: { id: string } }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return <ProjectDetail projectId={parseInt(id)}></ProjectDetail>;
}

export default pagemodal;
