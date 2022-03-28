namespace Xellays.Disk.DataAccess.Entities;

public class FileEntity
{
    public Guid Id { get; set; }
    public long FileId { get; set; }
    public long AccessHash { get; set; }
    public byte[] FileReference { get; set; }
    public int Size { get; set; }
}