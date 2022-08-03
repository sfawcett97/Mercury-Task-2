using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;


namespace Mercury_Project_Try_4.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }



        // GET: HomeController1/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: HomeController1/Create
        [HttpPost]

        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                //Retrieve data from model.
                ViewData["Name"] = collection["NameIn"];
                ViewData["Email"] = collection["EmailIn"];
                ViewData["Card"] = collection["CardIn"];

                //Email recieved data
                MailMessage msg = new();
                SmtpClient smtp = new();

                var fromAddress = new MailAddress("SfawcettTestEmail@gmail.com", "From Validation");
                var toAddress = new MailAddress("test@dn-uk.com", "Test");
                msg.To.Add(new MailAddress("sfawcett1997@hotmail.com"));


                msg.Subject = "User Data";
                msg.Body += "\nName =" + collection["Namein"];
                msg.Body += "\nEmail =" + collection["EmailIn"];
                msg.Body += "\nCard =" + collection["CardIn"];
                msg.From = new MailAddress("SfawcettTestEmail@gmail.com", "Sean");
                msg.IsBodyHtml = true;

                smtp.Credentials = new System.Net.NetworkCredential("SfawcettTestEmail@gmail.com", "TestingEmail97");
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.UseDefaultCredentials = false;
                smtp.Port = 587;
                
                
                smtp.Send(msg);
                msg.Dispose();


                return View("Index");
            }
            catch
            {
                return View("Index");
                //Email code isn't workin so the catch function is being run.
            }
        }


    }
}


