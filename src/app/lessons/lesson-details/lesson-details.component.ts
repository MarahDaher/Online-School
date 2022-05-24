import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent extends BaseComponent implements OnInit {

  classList = [
    {
      id: 0 ,
      number: '01',
      title: 'المرحلة الأولى',
      desc: "التعريف باللغة العربية و أصالتها و تعليم حروفها مع المدود الطويلة و القصيرة ، حتى يستطيع المتعلّم إتقان تشكيل مقطع من حرفين ، أو تركيب كلمة من حرفين أو ثلاثــة."
    },
    {
      id: 1 ,
      number: '02',
      title: 'المرحلة الثانية',
      desc: "تعلّم كيفيـــة تشكيــل الجملــة ، مع التّمييز بين نوعـــي الجملة ( الجملة الغعلـــة ،  الجملـــة الأسميـــة ) بالإضافة إلى التميـــز بين الفعل و الاســـم."
    },
    {
      id: 2 ,
      number: '03',
      title: 'المرحلة الثالثة',
      desc :"التّدرّب على قراءة نصوص من ثلاثة أو أربعة أسطـــر ، و محاولـــة وصف الأشياء التي حولنـــا بجُملٍ تعبيريّـــة جميلـــة ذات معنى."

    },
    {
      id: 3,
      number: '04',
      title: 'المرحلة الأخيرة',
      desc : "التركيـــز على الجانـــب اللغــوي و الإملائـــي بشرح دروس في قواعد اللغـــة و الإملاء."
    }
  ];
  constructor(
    injector: Injector
  ) {
    super(injector);
   }

  ngOnInit(): void {
  }

}
