import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    url: {
        type: String,
        required: true,
      },
      attachments: [
        {
          filename: String, // Nombre del archivo
          data: Buffer,     // Datos binarios del archivo
          contentType: String, // Tipo de contenido del archivo (por ejemplo, "image/jpeg" o "application/pdf")
        }
      ],
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);