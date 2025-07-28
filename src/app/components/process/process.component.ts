import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ProcessStep } from '../../Interfaces/Model';

@Component({
  selector: 'app-process',
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slidesToShow = 3;
  slideWidth = 0;
  maxSlides = 0;
  slides: number[] = [];
  isAutoPlaying = true;
  autoPlayInterval: any;

  manufacturingProcess: ProcessStep[] = [
    {
      step: 1,
      title: "Raw Material",
      desc: "Quality raw material sourcing and preparation for optimal paper board production",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-2 0H9m-2 0H5m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4",
    },
    {
      step: 2,
      title: "Bleaching Unit",
      desc: "Advanced eco-friendly bleaching process for optimal whiteness while maintaining fiber integrity",
      iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      step: 3,
      title: "Pulp Section",
      desc: "Advanced pulp preparation and processing with modern equipment ensuring consistent fiber quality",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-2 0H9m-2 0H5m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4",
    },
    {
      step: 4,
      title: "Machine Section",
      desc: "State-of-the-art paper board formation using precision machinery and automated controls",
      iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
    {
      step: 5,
      title: "Quality Control",
      desc: "Comprehensive quality scanning and testing to ensure product meets international standards",
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      step: 6,
      title: "Rewinder",
      desc: "Precision rewinding process for proper roll formation and tension control",
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      step: 7,
      title: "Cutter",
      desc: "Advanced cutting systems for precise dimensions and clean edges according to specifications",
      iconPath: "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-7-4V8a2 2 0 012-2h8a2 2 0 012 2v2m-6 4v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2",
    },
    {
      step: 8,
      title: "Packing",
      desc: "Professional packaging ensuring product protection during transportation and storage",
      iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 10l3-3m0 0l3 3m-3-3v12",
    },
    {
      step: 9,
      title: "Sales",
      desc: "Efficient distribution network ensuring timely delivery to customers across Pakistan",
      iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
  ];

  ngOnInit() {
    this.calculateSlides();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateSlides();
  }
  calculatePercentage(step: number): number {
  return Math.round((step / this.manufacturingProcess.length) * 100);
}

  calculateSlides() {
    const width = window.innerWidth;
    if (width < 768) {
      this.slidesToShow = 1;
    } else if (width < 1024) {
      this.slidesToShow = 2;
    } else {
      this.slidesToShow = 3;
    }

    this.slideWidth = 100 / this.slidesToShow;
    // Fixed: Calculate the maximum number of slides properly
    this.maxSlides = Math.max(1, this.manufacturingProcess.length - this.slidesToShow + 1);
    this.slides = Array.from({ length: this.maxSlides }, (_, i) => i);

    // Ensure current slide is valid
    if (this.currentSlide >= this.maxSlides) {
      this.currentSlide = this.maxSlides - 1;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Loop back to start
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.maxSlides - 1; // Loop to end
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoPlay() {
    if (this.isAutoPlaying) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    }
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  toggleAutoPlay() {
    this.isAutoPlaying = !this.isAutoPlaying;
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }
}