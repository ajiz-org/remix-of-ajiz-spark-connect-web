import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import type { ComponentProps, ReactNode } from "react";

type ContactKind = "whatsapp" | "email" | "link";

type ContactConfig = {
  kind: ContactKind;
  /** For kind=whatsapp: digits only (no '+', no spaces). For email: address. For link: full href. */
  value: string;
  /** Display string shown in the dialog link (e.g. '+216 21 405 657'). Defaults to value. */
  display?: string;
  /** i18n key for the displayed link text. */
  linkTextKey: string;
  /** Interpolation variable name used by linkTextKey (e.g. 'phone' or 'email'). */
  linkVarName?: string;
};

type ContactDialogButtonProps = {
  className?: string;
  /** shadcn Button props that are commonly customized */
  size?: ComponentProps<typeof Button>["size"];
  variant?: ComponentProps<typeof Button>["variant"];

  /** Button label key. If omitted, provide buttonText instead. */
  buttonTextKey?: string;
  /** Button label node (used when buttonTextKey is not provided). */
  buttonText?: ReactNode;

  titleKey: string;
  descriptionKey: string;
  cancelKey: string;
  actionKey: string;

  contact: ContactConfig;
};

function getHref(contact: ContactConfig) {
  if (contact.kind === "whatsapp") return `https://wa.me/${contact.value}`;
  if (contact.kind === "email") return `mailto:${contact.value}`;
  return contact.value;
}

function shouldOpenNewTab(kind: ContactKind) {
  return kind === "whatsapp" || kind === "link";
}

export default function ContactDialogButton({
  className,
  size = "lg",
  variant,
  buttonTextKey,
  buttonText,
  titleKey,
  descriptionKey,
  cancelKey,
  actionKey,
  contact,
}: ContactDialogButtonProps) {
  const { t } = useTranslation();

  const href = getHref(contact);
  const openNewTab = shouldOpenNewTab(contact.kind);

  const display = contact.display ?? contact.value;
  const linkVarName = contact.linkVarName;

  const linkLabel = linkVarName
    ? t(contact.linkTextKey, { [linkVarName]: display })
    : t(contact.linkTextKey, { value: display });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={size} variant={variant} className={className}>
          {buttonTextKey ? t(buttonTextKey) : (buttonText ?? t(titleKey))}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t(titleKey)}</AlertDialogTitle>
          <AlertDialogDescription>{t(descriptionKey)}</AlertDialogDescription>

          <div className="pt-2 text-sm">
            <a
              href={href}
              target={openNewTab ? "_blank" : undefined}
              rel={openNewTab ? "noreferrer" : undefined}
              className="font-medium text-[#184260] underline underline-offset-4"
              style={{ unicodeBidi: "plaintext" }}
            >
              {linkLabel}
            </a>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{t(cancelKey)}</AlertDialogCancel>
          <AlertDialogAction asChild>
            <a
              href={href}
              target={openNewTab ? "_blank" : undefined}
              rel={openNewTab ? "noreferrer" : undefined}
            >
              {t(actionKey)}
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
