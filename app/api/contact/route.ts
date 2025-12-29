import { db } from "@/lib/db";
import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nombre, email, mensaje } = await req.json();

  // Validación editorial
  if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios" },
      { status: 400 }
    );
  }

  try {
    // Persistencia institucional
    await db.contactRequest.create({
      data: { nombre, email, mensaje },
    });

    // Envío editorial desde dominio verificado
    await resend.emails.send({
      from: "contacto@montestack.com", // debe estar verificado en Resend
      to: "ivan@monte.dev",
      subject: "📩 [v1.0] Nuevo contacto desde MonteStack",
      html: `
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
        <hr/>
        <p style="font-size: 0.9em; color: #666;">
          Este mensaje fue generado automáticamente por el sistema editorial de MonteStack.<br/>
          Remitente técnico: contacto@montestack.com
        </p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Error al procesar solicitud:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
