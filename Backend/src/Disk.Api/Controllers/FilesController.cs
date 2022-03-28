using Microsoft.AspNetCore.Mvc;

namespace Xellays.Disk.Api.Wallet.Api.Controllers;

public class FilesController : ApiControllerBase
{
    /*[HttpGet("{id:guid}")]
    public async Task<FileStreamResult> GetFileById(Guid id)
    {

        // return new FileStreamResult(stream, "application/octet-stream");
    }*/

    [HttpPost]

    public async Task<IActionResult> UploadFile()
    {
        var file = HttpContext.Request.Form.Files.GetFile("Payload");

        return Ok();
    }
}