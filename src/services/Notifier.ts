import { toast } from "react-toastify";

class Notifier {
  static messageSent(): void {
    toast.success("Se ha enviado el mensaje.", { autoClose: 3000 })
  }

  static subscribedToNewsletter() {
    toast.success("Se ha suscrito al newsletter satisfactoriamente.", { autoClose: 3000 })
  }

  static wrongEmail() {
    toast.error("Error: El correo es inválido.", { autoClose: 3000 })
  }

  static missingData() {
    toast.error("Error: Complete los campos solicitado.", { autoClose: 3000 })
  }
}

export default Notifier