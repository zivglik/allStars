using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GithubRepositoriesSearch.Models
{
    public static class SessionList
    {

        public static List<BookMarkGithubRepositoryModel> GetGithubRepositories(this ISession session)
        {
            return session.GetObject<List<BookMarkGithubRepositoryModel>>(Enums.SessionKeys.BookMarkGithubRepositories.ToString()) ?? new List<BookMarkGithubRepositoryModel>();
        }

        public static void SaveGithubRepositories(this ISession session, BookMarkGithubRepositoryModel githubRepository)
        {
            var bookmark = session.GetObject<List<BookMarkGithubRepositoryModel>>(Enums.SessionKeys.BookMarkGithubRepositories.ToString()) ?? new List<BookMarkGithubRepositoryModel>();
            bookmark.Add(githubRepository);
            session.SetObject(Enums.SessionKeys.BookMarkGithubRepositories.ToString(), bookmark);
        }

    }
}
