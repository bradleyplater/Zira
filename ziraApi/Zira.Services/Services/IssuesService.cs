using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zira.Core.Helpers;
using Zira.Core.Models.Issues;
using Zira.Core.Repositories;
using Zira.Core.Repositories.Issues;
using Zira.Services.Helpers;

namespace Zira.Services.Services
{
    public class IssuesService : IIssuesService
    {
        private readonly IIssuesRepository<Issue> _issueRepository;
        
        public IssuesService(IIssuesRepository<Issue> issueRepository)
        {
            _issueRepository = issueRepository;
        }

        public Issue CreateIssue(Issue issue)
        {

            var readableId = ServiceHelper.GenerateRandomId();

            while (_issueRepository.DocumentExistsWithReadableId(readableId))
            {
                readableId = ServiceHelper.GenerateRandomId();
            }
            issue.ReadableId = readableId;
            _issueRepository.InsertIssue(issue);
            return issue;
        }  
    }
}
