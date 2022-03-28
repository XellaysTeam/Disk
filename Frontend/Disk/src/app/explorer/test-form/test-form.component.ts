import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {
  public selectedFile?: File;

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  public selectFile(changeEvent: Event): void {
    const inputTarget = changeEvent.target as HTMLInputElement;
    const files = inputTarget.files;

    if (files?.length) {
      this.selectedFile = files[0];
    }
  }

  public uploadFile(): void {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('Payload', this.selectedFile, this.selectedFile.name);

      this.httpClient.post('https://localhost:7037/api/files', formData)
        .subscribe((data) => console.log(data));
    }
  }
}
