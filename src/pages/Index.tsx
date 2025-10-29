import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const stats = [
    { value: "8", label: "лет на рынке ИИ" },
    { value: "50+", label: "клиентов на постоянной подписке" },
    { value: "300+", label: "обученных компаний" }
  ];

  const cases = [
    {
      icon: "ShoppingCart",
      title: "Ритейл и e-commerce",
      description: "Автоматизация обработки заказов, персонализация предложений, прогнозирование спроса"
    },
    {
      icon: "Building2",
      title: "Производство",
      description: "Оптимизация производственных процессов, предиктивное обслуживание оборудования"
    },
    {
      icon: "TrendingUp",
      title: "Финансы",
      description: "Анализ рисков, автоматизация отчётности, прогнозирование трендов"
    },
    {
      icon: "Users",
      title: "HR и рекрутинг",
      description: "Автоматический скрининг резюме, анализ эффективности персонала"
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Быстрое внедрение",
      description: "От идеи до результата за 2-4 недели"
    },
    {
      icon: "Target",
      title: "Точечные решения",
      description: "Закрываем конкретные бизнес-задачи"
    },
    {
      icon: "TrendingUp",
      title: "Измеримый ROI",
      description: "Фиксируем метрики до и после внедрения"
    },
    {
      icon: "Users",
      title: "Обучение команды",
      description: "Ваши сотрудники умеют работать с ИИ"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Brain" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">ИИ-Университет</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:inline-flex">Связаться</Button>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Внедрение ИИ для бизнеса
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Превратите разговоры об ИИ в{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  реальные результаты
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Помогаем компаниям внедрить искусственный интеллект и получить измеримое повышение операционной эффективности. 8 лет опыта, 300+ обученных компаний.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Получить консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Смотреть кейсы
                  <Icon name="Play" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/60a75a1d-0104-4f70-904f-6dc549f87f40/files/ded5efe0-4e5e-4502-b937-5a35a3a6ba8d.jpg"
                alt="AI Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Проблема: все говорят про ИИ, но никто не внедряет
            </h2>
            <p className="text-xl text-muted-foreground">
              Компании понимают потенциал искусственного интеллекта, но не знают, с чего начать. Мы помогаем пройти путь от идеи до работающего решения.
            </p>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Кейсы по отраслям</h2>
            <p className="text-xl text-muted-foreground">Реальные результаты в разных сегментах бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={caseItem.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{caseItem.title}</h3>
                <p className="text-muted-foreground">{caseItem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Системный подход к внедрению ИИ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/60a75a1d-0104-4f70-904f-6dc549f87f40/files/e282e593-5d94-4283-a1c7-7513a692af08.jpg"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">50+ клиентов доверяют нам</h3>
              <p className="text-lg text-muted-foreground">
                Мы работаем с лидерами рынка в разных отраслях: от крупных сетей до среднего бизнеса. Наши клиенты видят реальное повышение эффективности уже в первые месяцы работы.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold">Высокий NPS</div>
                    <div className="text-muted-foreground">Клиенты рекомендуют нас партнёрам</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold">Постоянная подписка</div>
                    <div className="text-muted-foreground">Долгосрочное сотрудничество и поддержка</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold">Публичные кейсы</div>
                    <div className="text-muted-foreground">Открыто делимся результатами</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/60a75a1d-0104-4f70-904f-6dc549f87f40/files/fa29bc05-1b67-44ea-a60f-6ae4bf6edd80.jpg"
              alt="Analytics"
              className="rounded-2xl shadow-xl mb-12"
            />
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Цепочка продуктов</h2>
              <p className="text-lg text-muted-foreground">От знакомства с ИИ до полноценного внедрения</p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="p-6 bg-white">
                  <div className="text-4xl font-bold text-primary mb-2">01</div>
                  <h3 className="text-xl font-semibold mb-2">Мастер-класс</h3>
                  <p className="text-muted-foreground">Базовое понимание возможностей ИИ для вашего бизнеса</p>
                </Card>
                <Card className="p-6 bg-white">
                  <div className="text-4xl font-bold text-primary mb-2">02</div>
                  <h3 className="text-xl font-semibold mb-2">Пилотный проект</h3>
                  <p className="text-muted-foreground">Тестовое внедрение на ограниченной выборке</p>
                </Card>
                <Card className="p-6 bg-white">
                  <div className="text-4xl font-bold text-primary mb-2">03</div>
                  <h3 className="text-xl font-semibold mb-2">Полное внедрение</h3>
                  <p className="text-muted-foreground">Масштабирование и интеграция в процессы</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в течение дня</p>
            </div>
            <Card className="p-8 bg-white shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="ivan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Компания</label>
                  <Input 
                    placeholder="ООО «Компания»"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашей задаче..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-base">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Brain" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ИИ-Университет</span>
              </div>
              <p className="text-white/70">Внедрение ИИ для бизнеса с 2016 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Преимущества</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Мастер-классы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консалтинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Внедрение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ai-university.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2025 ИИ-Университет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
