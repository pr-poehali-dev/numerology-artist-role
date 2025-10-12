import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Нумеролог & Монтажёр
          </h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-purple-600 transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-purple-600 transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-purple-600 transition-colors">Цены</button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                Магия чисел × Искусство видео
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Раскрываю судьбу через{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                числа
              </span>{" "}
              и создаю{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                визуальные истории
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Помогаю понять свой жизненный путь через нумерологию и воплощаю ваши идеи в захватывающие видео
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection('services')} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Узнать больше
              </Button>
              <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Портфолио
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30 animate-float"></div>
            <img 
              src="https://cdn.poehali.dev/projects/02cf32ba-c3b9-4bcf-9026-d1051dd11611/files/d9337755-fffa-4743-bf4c-ccdbddb83083.jpg" 
              alt="Нумеролог и монтажёр"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-gray-600">Примеры моих работ в нумерологии и видеомонтаже</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Star" className="text-white" size={32} />
                </div>
                <CardTitle>Персональный расчёт</CardTitle>
                <CardDescription>Полный нумерологический анализ личности</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Подробный разбор чисел судьбы, души и жизненного пути с рекомендациями</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Video" className="text-white" size={32} />
                </div>
                <CardTitle>Рекламный ролик</CardTitle>
                <CardDescription>Динамичное промо для бизнеса</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">30-секундный ролик с анимацией, цветокоррекцией и звуковым дизайном</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Sparkles" className="text-white" size={32} />
                </div>
                <CardTitle>Совместимость пары</CardTitle>
                <CardDescription>Нумерологический анализ отношений</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Расчёт совместимости партнёров и рекомендации для гармоничных отношений</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Film" className="text-white" size={32} />
                </div>
                <CardTitle>Свадебный клип</CardTitle>
                <CardDescription>Кинематографичная история любви</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Профессиональный монтаж с цветокоррекцией и музыкальным сопровождением</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Calendar" className="text-white" size={32} />
                </div>
                <CardTitle>Прогноз на год</CardTitle>
                <CardDescription>Персональный календарь событий</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Помесячный прогноз с благоприятными датами и рекомендациями</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Youtube" className="text-white" size={32} />
                </div>
                <CardTitle>YouTube контент</CardTitle>
                <CardDescription>Монтаж для видеоблогеров</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Динамичный монтаж с субтитрами, переходами и графикой</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-gray-600">Что я предлагаю</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Нумерология</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                      <span>Персональный нумерологический портрет</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                      <span>Анализ совместимости в отношениях</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                      <span>Прогноз на месяц, год или конкретное событие</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                      <span>Подбор благоприятных дат</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                      <span>Консультация по имени и дате рождения</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Video" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Видеомонтаж</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                      <span>Монтаж рекламных роликов и промо</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                      <span>Свадебные и праздничные видео</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                      <span>Контент для YouTube и соцсетей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                      <span>Цветокоррекция и звуковой дизайн</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                      <span>Анимация и графика</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены</h2>
            <p className="text-lg text-gray-600">Прозрачные тарифы на услуги</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">1️⃣</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">Базовый</CardTitle>
                  <CardDescription>Нумерология</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">2 500 ₽</span>
                </div>
                <ul className="space-y-3 text-sm text-left">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                    <span>Персональный расчёт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                    <span>PDF-отчёт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                    <span>30 мин консультации</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-400 hover:border-pink-600 transition-all hover:shadow-2xl scale-105">
              <CardHeader>
                <div className="text-center">
                  <div className="absolute top-4 right-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                    Популярно
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">2️⃣</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">Стандарт</CardTitle>
                  <CardDescription>Видеомонтаж</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">5 000 ₽</span>
                  <span className="text-gray-500 text-sm">/минута</span>
                </div>
                <ul className="space-y-3 text-sm text-left">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                    <span>Профессиональный монтаж</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                    <span>Цветокоррекция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                    <span>Звуковой дизайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                    <span>2 правки</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✨</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">Премиум</CardTitle>
                  <CardDescription>Всё вместе</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">15 000 ₽</span>
                </div>
                <ul className="space-y-3 text-sm text-left">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                    <span>Полный нумерологический разбор</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                    <span>Видео до 3 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                    <span>Анимация и графика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                    <span>Неограниченные правки</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Свяжитесь со мной</h3>
          <p className="mb-6 text-purple-200">Готова ответить на ваши вопросы и обсудить проект</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-pink-300 transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:text-pink-300 transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-pink-300 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
          <p className="text-purple-300 text-sm">© 2024 Нумеролог & Монтажёр. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
