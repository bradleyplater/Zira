using Microsoft.AspNetCore.Mvc;
using Zira.Core.Models.Issues;
using Zira.Services.Services;


namespace Zira.Api.Controllers
{
    [Route("api/v1/issues")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private readonly IIssuesService _issuesService;

        public IssuesController(IIssuesService issuesService)
        {
            _issuesService = issuesService;
        }

        public void GetIssue()
        {

        }

        [HttpPost]
        [Route("")]
        public ActionResult PostIssue(Issue postedIssue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var entity = _issuesService.CreateIssue(postedIssue);

            return CreatedAtAction(nameof(GetIssue), entity);
        }
    }
}
