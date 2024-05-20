// Card.tsx

import Image from "next/image";
import React from "react";
import { FeedItem } from "../pages/index";

interface CardProps {
  item: FeedItem;
}

export default function Card({ item }: CardProps) {
  // If there's no title, give it a default title
  const title =
    item.title[0] === " " || item.title[0] === undefined
      ? "Poor author was too nervous to name it"
      : item.title;

  // If there's an image, display it
  if (
    item.link[1].$.href &&
    /\.(jpe?g|png|gif|bmp|svg)$/.test(item.link[1].$.href)
  ) {
    return (
      <div
        key={item.id}
        className="m-1 p-4"
        style={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "3px",
          boxSizing: "border-box",
        }}
      >
        <Image
          className="hover:scale-105 transition-transform duration-100 ease-in-out"
          onClick={() => window.open(item.link[1].$.href)}
          src={item.link[1].$.href}
          alt={title}
          width={300}
          height={400}
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            width: "300px",
            height: "400px",
            margin: "auto",
            display: "block",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "3px",
          }}
        />
        <h3 style={{ padding: "10px" }}>{title}</h3>
      </div>
    );
  }

  // If there's no image, return null
  return null;
}
