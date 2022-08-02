using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



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
                return View("Index");
            }
            catch
            {
                return View();
            }
        }


    }
}


