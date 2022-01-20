import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-text',
  templateUrl: './read-text.component.html',
  styleUrls: ['./read-text.component.css'],
})
export class ReadTextComponent implements OnInit {
  constructor() {}

  textFile: any;
  wordArray: any = [];
  parseFile: any;
  storedArray : any = [];

  uploadFile(event: any) {
    this.textFile = event.target;
  }

  readTextFile() {
    var file: File = this.textFile.files[0] ? this.textFile.files[0] : null;
    var fileReader: FileReader = new FileReader();
    let self: any = this;
    fileReader.onload = function (e) {
      self.parseTextFile(fileReader.result);
    };
    fileReader.readAsText(file);
  }

  parseTextFile(textFile: any) {
    this.wordArray = [];
    this.parseFile = textFile
      .replace(/[^\w\s]/gi, '')
      .replace(/[\n|\r]/g, ' ')
      .replace(/\s+/g, ' ')
      .toLowerCase();
      
    this.parseFile = this.parseFile.split(' ');
    this.parseFile = this.parseFile.reduce((prev: any, nxt: string | number) => {
      prev[nxt] = prev[nxt] ?? 0;
      prev[nxt]++;
      return prev;
    }, {});

    for(var key in  this.parseFile){
      this.wordArray.push({word : key, count : this.parseFile[key] });
    }

    this.storedArray = this.wordArray;
 
    this.get6LetterWords();
    
  }

  getTop50Words(){
    this.wordArray = this.storedArray;
    this.wordArray = this.wordArray.sort(function (a : any, b : any) {  // revering the count of words
      return b.count - a.count
    }).slice(0, 50) 
    console.log(this.wordArray);
  }

  get6LetterWords(){
    this.wordArray = this.storedArray;
    this.wordArray = this.wordArray.filter((object : any) => object.word.length > 6 );
    this.wordArray = this.wordArray.sort(function (a : any, b : any) {  // revering the count of words
      return b.count - a.count
    }).slice(0, 50) 
    console.log(this.wordArray);
  }

  ngOnInit(): void {}
}
