import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IMessage, MailService } from "../shared/mail.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  // Basic data.

  title = "Kontaktiere uns";
  phone = "+49 1520 4271999";
  open_hours1 = "Montag-Freitag (10:00-18:00)";
  open_hours2 = "Samstag (09:00-15:00)";
  mail = "kontakt@hingucker-auto-detailing.de";
  website = "www.hingucker-auto-detailing.de";
  street = "Mindener Straße 57";
  city = "32547 Bad Oeynhausen, Deutschland";

  // Placeholder form data.
  placeholderName = "Dein Name";
  placeholderEmail = "Deine E-Mail";
  placeholderSubject = "Thema";
  placeholderMessage = "Nachricht";
  // Form responses.
  wrongName = "Geben Sie Ihren Namen ein";
  wrongEmail = "Schreibe deine E-Mail";
  wrongSubject = "Thema schreiben";
  wrongMessage = "Nachricht schreiben";
  sendMessage = "Nachricht schreiben";
  wrongForm = "Bitte geben Sie gültige Daten ein";
  sentMessage = "Die Nachricht wurde gesendet";
  // Google Maps data.
  lat = 52.2108682;
  lng = 8.812339;
  // Form primitives.
  signupForm: FormGroup;
  submitted: boolean;
  constructor(private mailService: MailService) { }
  ngOnInit() {
    // Set up form inputs.
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        subject: new FormControl(null, Validators.required),
        message: new FormControl(null, Validators.required)
      })
    });
    this.submitted = false;
  }
  onSubmit(message: IMessage) {
    this.submitted = true;
    this.mailService.sendEmail(message).subscribe(
      res => {
        console.log("MailService success", res);
        this.signupForm.reset(); // Reset form on submit.
        setTimeout(function () {
          this.submitted = false;
        }, 5000);
      },
      error => {
        // console.log('MailService error', error);
      }
    );
    // console.log('Message name with its content');
    // console.log(this.signupForm.value.userData.name);
    // console.log(message);
  }
}
