using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GithubRepositoriesSearch.Models;
using Microsoft.AspNetCore.Mvc;

namespace GithubRepositoriesSearch.Controllers
{
    public class SessionKeysController : Controller
    {
        [HttpPost]
        public IActionResult AddBookMarkGithubRepository([FromBody]BookMarkGithubRepositoryModel githubRepository)
        {
            SessionList.SaveGithubRepositories(HttpContext.Session, githubRepository);
            return Ok("true");
        }
        [HttpGet]
        public IActionResult GetBookMarkGithubRepository()
        {
            var bookmarks = SessionList.GetGithubRepositories(HttpContext.Session);
            return Ok(bookmarks);
        }

    }
}