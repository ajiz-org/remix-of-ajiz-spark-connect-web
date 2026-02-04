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

type DonateDialogButtonProps = {
  className?: string;
  /** Button label. Defaults to translated common.donate */
  children?: React.ReactNode;
  /** Radix/shadcn Button props that are commonly customized */
  size?: React.ComponentProps<typeof Button>["size"];
  variant?: React.ComponentProps<typeof Button>["variant"];

  /** WhatsApp number in international digits, no '+' or spaces. */
  whatsappNumber?: string;
  /** Displayed phone string (can include spaces). */
  displayPhone?: string;
};

export default function DonateDialogButton({
  className,
  children,
  size = "lg",
  variant,
  whatsappNumber = "21621405657",
  displayPhone = "+216 21 405 657",
}: DonateDialogButtonProps) {
  const { t } = useTranslation();

  const waLink = `https://wa.me/${whatsappNumber}`;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={size} variant={variant} className={className}>
          {children ?? t("common.donate")}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("common.donateDialog.title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("common.donateDialog.description")}
          </AlertDialogDescription>

          <div className="pt-2 text-sm">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#184260] underline underline-offset-4"
              style={{ unicodeBidi: "plaintext" }}
            >
              {t("common.donateDialog.phone", { phone: displayPhone })}
            </a>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{t("common.donateDialog.cancel")}</AlertDialogCancel>
          <AlertDialogAction asChild>
            <a href={waLink} target="_blank" rel="noreferrer">
              {t("common.donateDialog.whatsappCta")}
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
