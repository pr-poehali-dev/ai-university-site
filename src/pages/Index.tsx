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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
              <Icon name="Brain" className="text-white" size={26} />
            </div>
            <span className="text-2xl font-bold text-foreground">ИИ-Университет</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукты</a>
            <a href="#expertise" className="text-sm font-medium hover:text-primary transition-colors">Экспертиза</a>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold border border-primary/20">
              <Icon name="TrendingUp" size={18} />
              <span>8 лет на рынке ИИ · 50+ клиентов · 300+ компаний обучили</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Все говорят про ИИ,<br />
              но{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                никто не внедряет
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Превращаем разговоры об искусственном интеллекте в измеримое повышение операционной эффективности
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Начать зарабатывать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}>
                Смотреть кейсы
                <Icon name="Play" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">8</div>
                <div className="text-sm text-muted-foreground">лет на рынке ИИ</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">клиентов на подписке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">300+</div>
                <div className="text-sm text-muted-foreground">обученных компаний</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Проблема знакома?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Вы понимаете потенциал ИИ. Видите возможности для бизнеса. Но не знаете, с чего начать.<br />
              <span className="font-semibold text-foreground">Мы помогаем пройти путь от идеи до работающего решения за 2-4 недели.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Реальные результаты по отраслям</h2>
            <p className="text-lg text-muted-foreground">Каждый сегмент видит свои кейсы. Это работает для крупных сетей и МСБ.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                <Icon name="ShoppingCart" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Ритейл и e-commerce</h3>
              <p className="text-muted-foreground leading-relaxed">Автоматизация заказов, персонализация, прогноз спроса</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                <Icon name="Factory" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Производство</h3>
              <p className="text-muted-foreground leading-relaxed">Оптимизация процессов, предиктивное обслуживание</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                <Icon name="TrendingUp" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Финансы</h3>
              <p className="text-muted-foreground leading-relaxed">Анализ рисков, автоотчёты, прогноз трендов</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                <Icon name="Users" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">HR и рекрутинг</h3>
              <p className="text-muted-foreground leading-relaxed">Автоскрининг резюме, анализ эффективности</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Цепочка продуктов</h2>
            <p className="text-lg text-muted-foreground">От знакомства с ИИ до полноценного внедрения. Системная методология работает.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 hover:border-primary transition-all bg-white">
              <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Мастер-класс</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">Понимаете возможности ИИ для вашего бизнеса. Видите первые кейсы.</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Icon name="Clock" size={16} />
                <span>2-3 часа</span>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-all bg-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                ПОПУЛЯРНО
              </div>
              <div className="text-6xl font-bold text-primary/20 mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Пилотный проект</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">Тестируем ИИ на ограниченной выборке. Видите измеримый результат.</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Icon name="Clock" size={16} />
                <span>2-4 недели</span>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-all bg-white">
              <div className="text-6xl font-bold text-primary/20 mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Полное внедрение</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">Масштабируем решение. Интегрируем в процессы. Фиксируем ROI.</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Icon name="Clock" size={16} />
                <span>1-3 месяца</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Мы — эксперты в этом</h2>
            <p className="text-lg text-muted-foreground">Доказательства, которым вы можете доверять</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-6 text-center border-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">8 лет</div>
              <p className="text-muted-foreground">на рынке ИИ</p>
            </Card>

            <Card className="p-6 text-center border-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">клиентов на постоянной подписке</p>
            </Card>

            <Card className="p-6 text-center border-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <p className="text-muted-foreground">обученных компаний</p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Award" className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold text-foreground">Высокий NPS</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Клиенты рекомендуют нас партнёрам. Работаем с лидерами рынка в разных отраслях — от крупных сетей до среднего бизнеса.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-white" size={14} />
                      </div>
                      <span className="text-sm font-medium text-foreground">Долгосрочное сотрудничество</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-white" size={14} />
                      </div>
                      <span className="text-sm font-medium text-foreground">Публичные кейсы и отзывы</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-white" size={14} />
                      </div>
                      <span className="text-sm font-medium text-foreground">Масштаб клиентов — лидеры отраслей</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/60a75a1d-0104-4f70-904f-6dc549f87f40/files/e282e593-5d94-4283-a1c7-7513a692af08.jpg"
                    alt="Команда экспертов"
                    className="rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 bg-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://cdn.poehali.dev/projects/60a75a1d-0104-4f70-904f-6dc549f87f40/files/fa29bc05-1b67-44ea-a60f-6ae4bf6edd80.jpg"
                    alt="Результаты внедрения"
                    className="rounded-xl shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Измеримый результат</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Фиксируем метрики до и после внедрения. Вы видите реальное повышение операционной эффективности в цифрах.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Target" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-bold text-foreground">Быстрое внедрение</div>
                        <div className="text-sm text-muted-foreground">От идеи до результата за 2-4 недели</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Zap" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-bold text-foreground">Точечные решения</div>
                        <div className="text-sm text-muted-foreground">Закрываем конкретные бизнес-задачи</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-bold text-foreground">Обучение команды</div>
                        <div className="text-sm text-muted-foreground">Ваши сотрудники работают с ИИ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Готовы начать?</h2>
              <p className="text-lg text-muted-foreground">Оставьте заявку — свяжемся в течение дня</p>
            </div>
            
            <Card className="p-8 border-2 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email</label>
                    <Input 
                      type="email"
                      placeholder="ivan@company.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Компания</label>
                  <Input 
                    placeholder="ООО «Ваша компания»"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Расскажите о вашей задаче</label>
                  <Textarea 
                    placeholder="Например: хотим автоматизировать обработку заявок клиентов..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="border-2"
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
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Brain" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ИИ-Университет</span>
              </div>
              <p className="text-white/70">Внедрение ИИ для бизнеса с 2016 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Решения</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Продукты</a></li>
                <li><a href="#expertise" className="hover:text-white transition-colors">Экспертиза</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Форматы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Мастер-классы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пилотные проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Полное внедрение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Контакты</h4>
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
          <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
            <p>© 2025 ИИ-Университет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
