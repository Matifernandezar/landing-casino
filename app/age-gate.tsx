"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const STORAGE_KEY = "cva-age-confirmed";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(window.localStorage.getItem(STORAGE_KEY) !== "true");
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const confirmAge = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => undefined}>
      <DialogContent
        showCloseButton={false}
        className="age-dialog"
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <div className="age-seal" aria-hidden="true"><ShieldCheck size={26} /></div>
          <span className="section-kicker">ACCESO RESPONSABLE</span>
          <DialogTitle>¿Sos mayor de 18 años?</DialogTitle>
          <DialogDescription>
            Este sitio informa sobre juegos de azar. Jugar implica riesgo de perder
            dinero y debe ser siempre una forma de entretenimiento.
          </DialogDescription>
        </DialogHeader>
        <div className="age-actions">
          <button type="button" className="button button-primary" onClick={confirmAge}>
            Sí, soy mayor de 18
          </button>
          <a className="button button-ghost" href="https://www.google.com/">Salir del sitio</a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
